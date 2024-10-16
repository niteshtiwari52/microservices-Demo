
module.exports.Welcome = async (req, res) => {

    try {
        return res.status(200).json({
            success : true,
            message  :"Welcome to user Routers"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        }
        )
    }
}