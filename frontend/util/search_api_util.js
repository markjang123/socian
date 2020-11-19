export const fetchAllSearches = () => {
    return $.ajax({
        url: `/api/search`,
        method: "GET"
    })
}