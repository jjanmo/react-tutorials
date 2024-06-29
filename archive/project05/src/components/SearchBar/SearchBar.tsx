import { Button, Divider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import * as S from './SearchBar.style'

export default function SearchBar() {
  return (
    <>
      <S.SBox>
        <S.STextField
          type="text"
          label="Search"
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <Button variant="outlined">New</Button>
      </S.SBox>
      <Divider />
    </>
  )
}
