import https from "../../../http_common";


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
                    const resp = await https.get("top-headlines?category=techcrunch&lang=en&country=us&apikey=ec9b90d8575129c998c94b49a56fb273");
                    dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                    localStorage.setItem('loadList', JSON.stringify({articles: resp.data.articles, date: today}));
                }
            } else {
                const resp = await https.get("top-headlines?category=techcrunch&lang=en&country=us&apikey=ec9b90d8575129c998c94b49a56fb273");
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
                    const resp = await https.get("top-headlines?category=techcrunch&lang=uk&country=uk&min=30&apikey=ec9b90d8575129c998c94b49a56fb273");
                    dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                    localStorage.setItem('loadUkraineList', JSON.stringify({articles: resp.data.articles, date: today}));
                }
            } else {
                const resp = await https.get("top-headlines?category=techcrunch&lang=uk&country=uk&min=30&apikey=ec9b90d8575129c998c94b49a56fb273");
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
                    const resp = await https.get("top-headlines?category=it&lang=en&country=en&min=30&apikey=ec9b90d8575129c998c94b49a56fb273");
                    dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                    localStorage.setItem('loadItList', JSON.stringify({articles: resp.data.articles, date: today}));
                }
            } else {
                const resp = await https.get("top-headlines?category=it&lang=en&country=en&min=30&apikey=ec9b90d8575129c998c94b49a56fb273");
                dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
                const today = new Date();
                localStorage.setItem('loadItList', JSON.stringify({articles: resp.data.articles, date: today}));
            }
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}