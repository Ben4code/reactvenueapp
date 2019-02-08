import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



export default function SideDrawer(props) {
  return (
    <Drawer
        anchor="left" open={props.open} onClose={() => props.onClose(false)}
    >
        <List component="nav">
            <ListItem button onClick={()=> console.log('clicked')}>Event starts in</ListItem>
            <ListItem button onClick={()=> console.log('clicked')}>Venue Info</ListItem>
            <ListItem button onClick={()=> console.log('clicked')}>Highlights</ListItem>
            <ListItem button onClick={()=> console.log('clicked')}>Pricing</ListItem>
            <ListItem button onClick={()=> console.log('clicked')}>Location</ListItem>
        </List>
    </Drawer>
  )
}