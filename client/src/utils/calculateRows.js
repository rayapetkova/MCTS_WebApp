export const calculateRows = (numberOfPhotos, photosPerRow, rows=3) => {
    if (numberOfPhotos <= photosPerRow) {
        rows = 1
    } else if (numberOfPhotos < photosPerRow*3) {
        rows = 2
    }

    return rows
}
