const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    })

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller de getById', () => {
  const payloadMovie = {
    id: 1,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };
  const response = {};
  const request = {};

  describe('Quando O filme é encontrado', () => {
    before(() => {
      request.params = { id: 1 };
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(MoviesService, 'getById').resolves(payloadMovie);
    })

    after(() => {
      MoviesService.getById.restore();
    })

    it('Retorna status 200 e o filme encontrado', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(payloadMovie)).to.be.equal(true);
    })
  })

  describe('Quando o filme não é encontrado', () => {
    before(() => {
      request.params = { id: 2 };
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(MoviesService, 'getById').resolves("Filme não encontrado.");
    })

    after(() => {
      MoviesService.getById.restore();
    })

    it('Retorna status 404 com a mensagem "Filme não encontrado."', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
      expect(response.json.calledWith("Filme não encontrado.")).to.be.equal(true);
    })
  })
})