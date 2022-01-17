const CHAVE_API = 'e33e848c0548b92e7e073a0b2383d7c2'
const BASE_API = 'https://api.themoviedb.org/3'

const buscaAPI = async (endpoint) => {
    const req = await fetch(`${BASE_API}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    listaFilmes: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await buscaAPI(`/discover/tv?with_network=213&language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await buscaAPI(`/trending/all/week?language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await buscaAPI(`/movie/top_rated?language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await buscaAPI(`/discover/movie?with_genres=28&language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await buscaAPI(`/discover/movie?with_genres=35&language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await buscaAPI(`/discover/movie?with_genres=27&language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await buscaAPI(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${CHAVE_API}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await buscaAPI(`/discover/movie?with_genres=99&language=pt-BR&api_key=${CHAVE_API}`)
            }
        ]
    },

    informacoesFilme: async (movieId, type) => {
        let info = {}

        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await buscaAPI(`/movie/${movieId}?language=pt-BR&api_key=${CHAVE_API}`)
                break;
                case 'tv':
                    info = await buscaAPI(`/tv/${movieId}?language=pt-BR&api_key=${CHAVE_API}`)
                break;
                default: 
                    info = null
                break;
            }
        }

        return info
    }
}