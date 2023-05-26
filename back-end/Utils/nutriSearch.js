const axios = require('axios');
require('dotenv').config();

async function nutriSearch(food){
	console.log(`The food to be searched is ${food}`);
	const message = `Get the nutrition information on ${food}, specifically only report calorie per serving and protein per serving` 
	try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: message },
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        )

        
	return response.data.choices[0].message

    } catch (error) {
        console.error("Error:", error)
        return "error"
    }

}

module.exports = nutriSearch;