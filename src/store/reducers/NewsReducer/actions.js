import http from "../../../http_common";


export const loadList = () => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_LOAD', payload: true });

            const storedData = localStorage.getItem('loadList');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                const storedDate = new Date(parsedData.date);
                const today = new Date();

                if (storedDate.getDate() === today.getDate() &&
                    storedDate.getMonth() === today.getMonth() &&
                    storedDate.getFullYear() === today.getFullYear()) {
                    dispatch({type: 'LOAD_LIST', payload: {list: parsedData.articles, load: false}});
                } else {
                    const resp = await http.get("top-headlines?sources=techcrunch&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
                    dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                    localStorage.setItem('loadList', JSON.stringify({articles: resp.data.articles, date: today}));
                }
            } else {
                const resp = await http.get("top-headlines?sources=techcrunch&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
                dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                const today = new Date();
                localStorage.setItem('loadList', JSON.stringify({articles: resp.data.articles, date: today}));
            }
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}

export const loadUkraineList = () => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_LOAD', payload: true });

            const storedData = localStorage.getItem('loadUkraineList');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                const storedDate = new Date(parsedData.date);
                const today = new Date();

                if (storedDate.getDate() === today.getDate() &&
                    storedDate.getMonth() === today.getMonth() &&
                    storedDate.getFullYear() === today.getFullYear()) {
                    dispatch({type: 'LOAD_LIST', payload: {list: parsedData.articles, load: false}});
                } else {
                    const resp = await http.get("top-headlines?language=uk&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
                    dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                    localStorage.setItem('loadUkraineList', JSON.stringify({articles: resp.data.articles, date: today}));
                }
            } else {
                const resp = await http.get("top-headlines?language=uk&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
                dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                const today = new Date();
                localStorage.setItem('loadUkraineList', JSON.stringify({articles: resp.data.articles, date: today}));
            }
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}

export const loadItList = () => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_LOAD', payload: true });

            const storedData = localStorage.getItem('loadItList');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                const storedDate = new Date(parsedData.date);
                const today = new Date();

                if (storedDate.getDate() === today.getDate() &&
                    storedDate.getMonth() === today.getMonth() &&
                    storedDate.getFullYear() === today.getFullYear()) {
                    dispatch({type: 'LOAD_LIST', payload: {list: parsedData.articles, load: false}});
                } else {
                    const resp = await http.get("top-headlines?q=it&language=en&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
                    dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                    localStorage.setItem('loadItList', JSON.stringify({articles: resp.data.articles, date: today}));
                }
            } else {
                const resp = await http.get("top-headlines?q=it&language=en&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
                dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                const today = new Date();
                localStorage.setItem('loadItList', JSON.stringify({articles: resp.data.articles, date: today}));
            }
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}