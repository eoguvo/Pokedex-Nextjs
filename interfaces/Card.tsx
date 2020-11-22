export type Data = {
    data?: {
        types?: [{
            type: {
                name: string,
            }
        }]
    },
    error?: boolean,
    isValidating?: boolean
}
export export type CardProps = {
    name: string,
    id: number,
}