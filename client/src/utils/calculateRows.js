export const calculateRows = (numberOfPhotos, photosPerRow) => {
    let rows = 3

    if (numberOfPhotos <= photosPerRow) {
        rows = 1
    } else if (numberOfPhotos < photosPerRow*2) {
        rows = 2
    } else {
        rows = 3
    }

    return rows
}
