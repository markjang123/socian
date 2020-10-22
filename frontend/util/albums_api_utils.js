export const fetchAllAlbums = () => {
    return $.ajax({
        url: "/api/albums",
        method: "GET"
    })
}
export const fetchUserAlbums = (userId) => {
    return $.ajax({
        url: `/api/users/${userId}/albums`,
        method: "GET"
    })
}