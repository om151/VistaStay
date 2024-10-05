const Joi = require("joi");


listingSchema = Joi.object({

    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().valid('Trending', 'Rooms', 'IconicCities', 'Mountain', 'Castles', 'AmazingPools', 'Campings', 'Farms', 'Arctic', 'Doms', 'Boats').required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price:Joi.number().required().min(0),
    image: Joi.object({
        url: Joi.string().uri().allow('', null) // Allow empty strings or null
    }).allow(null)

})

const reviewSchema =  Joi.object({


        rating:Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),


});

module.exports = { listingSchema,reviewSchema };
