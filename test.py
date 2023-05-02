import requests
import json
import mysql.connector
import time
import datetime
# import RPi.GPIO as GPIO

# GPIO.setwarnings(False)
# GPIO.setmode(GPIO.BCM)
 
# GPIO.setup(Relay_Ch1,GPIO.OUT)
# GPIO.setup(Relay_Ch2,GPIO.OUT)
# GPIO.setup(Relay_Ch3,GPIO.OUT)
 
print("Setup The Relay Module is [success]")

# GPIO.output(Relay_Ch1,GPIO.HIGH)
print("Channel 1:The Common Contact is access to the Normal Closed Contact!")

# GPIO.output(Relay_Ch2,GPIO.HIGH)
print("Channel 2:The Common Contact is access to the Normal Closed Contact!")

# GPIO.output(Relay_Ch3,GPIO.HIGH)
print("Channel 3:The Common Contact is access to the Normal Closed Contact!")

data = []
withinResetTime = False
priceToBeUnder = 0
offset = 10

def Delete_Data():
	mydb = mysql.connector.connect(
		host="localhost",
		user="root",
		password="Had03834",
		database="electricity_checker"
	)

	mycursor = mydb.cursor()

	sql= "DELETE FROM pricerecord"

	mycursor.execute(sql)
	mydb.commit()


def Write_Data(date):
	res = requests.get('https://www.elprisenligenu.dk/api/v1/prices/{}_DK1.json'.format(date))
	data = json.loads(res.text)

	tempData = []

	for i in data:
		test = {key: i[key] for key in i.keys()
			& {'DKK_per_kWh', 'time_start', 'time_end'}}
		tempData.append(test)
		

	for record in tempData:
		mydb = mysql.connector.connect(
			host="localhost",
			user="root",
			password="Had03834",
			database="electricity_checker"
		)
		
		mycursor = mydb.cursor()
			
		sql = "INSERT INTO pricerecord (price, starttime, endtime) VALUES (%s, %s, %s)"
		val = (record["DKK_per_kWh"], record["time_start"], record["time_end"])

		mycursor.execute(sql, val)
		mydb.commit()


def Get_Data():
	mydb = mysql.connector.connect(
		host="localhost",
		user="root",
		password="Had03834",
		database="electricity_checker"
	)

	mycursor = mydb.cursor()
	mycursor.execute("SELECT * FROM pricerecord")
	global data
	data = mycursor.fetchall()


def OverWrite_Data(date):
	date = list(str(date))
	date[4] = "/"
	date = ''.join(date)
	Delete_Data()
	Write_Data(date)
	Get_Data()


def GetPrice():
	mydb = mysql.connector.connect(
		host="localhost",
		user="root",
		password="Had03834",
		database="electricity_checker"
	)

	mycursor = mydb.cursor()
	mycursor.execute("SELECT * FROM setting")
	priceData = mycursor.fetchall()
	calculatedPrice = (priceData[0][1] - priceData[0][2])
	global priceToBeUnder
	priceToBeUnder = calculatedPrice
	


try:

	try:
			import httplib
	except:
			import http.client as httplib
 
	def haveInternet():
		conn = httplib.HTTPConnection("www.google.com", timeout=5)
		try:
			conn.request("HEAD", "/")
			conn.close()
			return True
		except:
			conn.close()
			return False
 
	connection = haveInternet()

	if (connection == True):
		OverWrite_Data(datetime.datetime.now().date())

	while True:

			if (connection == True):

				#Checks if the current date matches date in database. If not, it will fetch the information for the current date
				if (datetime.datetime.date(data[0][2]) != datetime.datetime.now().date()):
					OverWrite_Data(datetime.datetime.now().date())

				#Checks the price to be under for relay to activate
				GetPrice()

				#Goes trough each record in the database and checks if the current hours price is below the threshold
				for record in data:
					start = record[2]
					end = record[3]
					now = datetime.datetime.now()
					if start <= now <= end:
						if (record[1] <= priceToBeUnder):
							# GPIO.output(Relay_Ch1,GPIO.HIGH)
							print("Channel 1:The Common Contact is access to the Normal Open Contact!")
						else:
							# GPIO.output(Relay_Ch1,GPIO.HIGH)
							print("Channel 1:The Common Contact is access to the Normal Closed Contact!")
							
				time.sleep(10)
				connection = haveInternet()

			else:
				print("No internet connection!")
				# GPIO.output(Relay_Ch1,GPIO.HIGH)
				print("Channel 1:The Common Contact is access to the Normal Closed Contact!")
				# GPIO.output(Relay_Ch2,GPIO.HIGH)
				print("Channel 2:The Common Contact is access to the Normal Closed Contact!")
				# GPIO.output(Relay_Ch3,GPIO.HIGH)
				print("Channel 3:The Common Contact is access to the Normal Closed Contact!")

				time.sleep(10)
				connection = haveInternet()

except:
	print("except")
	# GPIO.cleanup()