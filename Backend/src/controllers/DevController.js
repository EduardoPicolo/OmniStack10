const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
    
            // const techsArray = techs.split(',').map(tech => tech.trim());
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
    
            // console.log(github_username, name, bio, techs, avatar_url);
    
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
            return response.json(dev);
        }
        return response.json({ });
        // return response.end();
    },

    async update(request, response) {
        const { github_username } = request.query;
        const { bio, techs } = request.body;
        const techsArray = parseStringAsArray(techs);
        // console.log(bio, techsArray);

        const dev = await Dev.updateOne({
            github_username,
            $set: {
                // "bio": `${bio}`,
                // "techs": `${techsArray}`,
                bio,
                techs: techsArray,
            }
        });

        return response.json(dev);
    },

    async destroy(request, response) {
        const { github_username } = request.params;

        // const dev = await Dev.findOne({
        //     github_username,
        // });

        await Dev.deleteOne({
            github_username,
        });

        // return response.json(dev);
        return response.end();
    },

};