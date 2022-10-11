import React from 'react'
import { Drawer, Icon, List, ListItemButton, MenuItem, TextField } from '@mui/material'

type Option = {
  value: string
  label: string
}

type Props = {
  value: string
  select: boolean
  handleChange: (value: string) => void
  options: Option[]
}

const SelectDrawer = (props: Props) => {
  const [open, setOpen] = React.useState(false)

  const handleUpdateValue = (value: string) => {
    props.handleChange(value)
    setOpen(false)
  }

  // Get the correctly formatted label to display in the text field when using a drawer
  const selectedLabel = React.useMemo(() => props.options.find((option) => option.value === props.value)?.label, [props.value, props.options])

  return (
   <React.Fragment>
     <TextField 
      value={props.select ? props.value : selectedLabel}
      onClick={() => !props.select && setOpen(true)}
      onChange={(event) => handleUpdateValue(event.target.value)}
      select={props.select}
      fullWidth
      inputProps={{
        sx: {
          cursor: 'pointer',
        },
      }}
      InputProps={{
        endAdornment: props.select ? undefined : <Icon>arrow_drop_down</Icon>,
      }}
    >
      {props.select && props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    {!props.select && (
      <Drawer open={open} onClose={() => setOpen(false)} anchor="bottom">
      <List>
        {props.options.map((option) => (
          <ListItemButton key={option.value} onClick={()=> handleUpdateValue(option.value)} selected={props.value === option.value}>
            {option.label}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
    )}
   </React.Fragment>
  )
}

export default SelectDrawer