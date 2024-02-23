import mssql from 'mssql'
import { createTour } from '../controllers/userController'

describe("Tour create", ()=>{

    let res: any 

    beforeEach(()=>{
        res= {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis() // Corrected mockReturnThis() call
        }
    })

    it('succesfully created Tour', async () => {
        const req ={
            body:{
                tour_img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/21/74/0d/diani-sea-resort.jpg?w=700&h=-1&s=1", 
                tourName:"mombasa package", 
                tourInfo:"visit diani for more of lively  events live lively",
                location:"Diani mombasa",
                date:"24/02/2024",
                price:"15,000",
                tourType:"weekend gateways"    
            }
        }

        const mockedInput = jest.fn().mockReturnThis() 
        const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: [1] })
        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        }
        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool as never) // Corrected type casting to 'any'

        await createTour(req as any, res)

        expect(res.json).toHaveBeenCalledWith({ message: "Tour created successfully" })
    })
})
 