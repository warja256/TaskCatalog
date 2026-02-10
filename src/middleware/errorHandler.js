module.exports = (err, req, res, next) => {
    console.error(`[${req.requestId}] Error: ${err.message}`);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Internal server error',
        requestId: req.requestId,
      },
    });
  };
  