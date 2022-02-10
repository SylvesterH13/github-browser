async function fetchRequestAsync(request) {

    let respose = await fetch(request);
    if (!respose.ok) {
        return null;
    }

    return respose.json();
}

const UserApi = {
    
    getUserAsync: async (user) => {
        
        let request = new Request(`${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/${user}`, {
            method: 'GET'
        });
        return await fetchRequestAsync(request);
    },

    getReposAsync: async (user) => {

        let request = new Request(`${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/${user}/repos`, {
            method: 'GET'
        });
        return await fetchRequestAsync(request);
    },

    getStarredAsync: async (user) => {

        let request = new Request(`${process.env.REACT_APP_GITHUB_API_BASE_URL}/users/${user}/starred`, {
            method: 'GET'
        });
        return await fetchRequestAsync(request);
    }
};

export default UserApi;