
import { FC } from "react";

// Importing types
import { ItemType } from '../types'

// Importing components
import ListItem from "./ListItem";

type ListProps = {
    items: ItemType[],
};
export const List: FC<ListProps> = ({items}) => {
    return (
        <ul>
            {/* {items.map(({title, description, completed}, key) => <ListItem />)} */}
        </ul>
    );
}