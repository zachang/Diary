const routes = (router) => {
  router.route('/')
    .get((req, res) => res.status(200).send({
      message: 'Welcome to the hellobooks API!'
    }))
}

export default routes;
