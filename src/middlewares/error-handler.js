module.exports = (err, req, res, next) => {
    console.error(err)

    if (err.code && err.statusCode && err.message) {
        return res.status(err.statusCode).json({
            code: err.code,
            message: err.message,
            default_detail: err.message,
        })
    }

    return res.status(500).send(err)
}
