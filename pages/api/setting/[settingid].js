import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const { settingid } = req.query
    switch (req.method) {
        case "GET": 
            // var machine = await prisma.machine.findUnique({
            //     where: {
            //         id: Number(mid)
            //     },
            //     include: {maintenances: true}
            // })
            // res.json(machine)
            
            res.end("GET")
            break;
        case "POST":
            res.end()
            break;
        case "DELETE":
            // await prisma.machineip.delete({
            //     where: { 
            //         id: Number(addressid)
            //     },
            // })

            // var addresses = await prisma.machineip.findMany()
            // res.json(addresses)
            res.end("DELETE")
            break;
        case "PUT":
            // var machine = req.body
            
            // await prisma.machine.update({
            //     where: {
            //         id: Number(mid)
            //     },
            //     data: machine
                
            // })

            // var machines = await prisma.machine.findMany()
            // res.json(machines)
            res.end("PUT")
            break;
        case "PATCH":
            var { id, price, charge } = req.body

            var setting = await prisma.setting.update({
                where: {
                    id: id
                },
                data: {
                    price: Number(price),
                    charge: Number(charge)
                }
                
            })

            var settings = await prisma.setting.findMany()
            res.json(settings)
            
            break;
    }    
}