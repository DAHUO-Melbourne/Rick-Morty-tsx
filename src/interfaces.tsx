export interface IState {
    episodes: Array<any>,
    favourites: Array<any>
}

export interface IAction {
    type: string
    payload: any
}