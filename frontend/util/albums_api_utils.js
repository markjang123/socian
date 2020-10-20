export const fetchAllAlbums = () => {
    return $.ajax({
        url: "/api/albums",
        method: "GET"
    })
}