const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Testa camada MoviesService', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });

  describe('Testa MoviesServices.getById', () => {
    const payloadMovie = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    describe('Quando o filme é encontrado', () => {
      before(() => {
        sinon.stub(MoviesModel, 'getById').resolves(payloadMovie)
      })
  
      after(() => {
        MoviesModel.getById.restore();
      })
  
      it('Retorna informações do filme', async () => {
        const result = await MoviesService.getById(1);
        expect(result.id).to.be.equal(1);
        expect(result).to.be.equal(payloadMovie);
      })
    })

    describe('Quando o filme não é encontrado', () => {
      before(() => {
        sinon.stub(MoviesModel, 'getById').resolves({})
      })
  
      after(() => {
        MoviesModel.getById.restore();
      })

      it('Retorna  "Filme não encontrado."', async () => {
        const resultService = await MoviesService.getById(2);
        expect(resultService).to.be.a('string');
        expect(resultService).to.be.equal("Filme não encontrado.");
      })
    })
  })
});