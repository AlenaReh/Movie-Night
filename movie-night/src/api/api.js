const apiCall = {
    url: 'https://api.themoviedb.org/3/movie/550?',
    apiKey: '13d263ca75d05865f800ff0aa77788ce',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiCall;