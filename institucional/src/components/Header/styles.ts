import {styled} from '../../styles/index'

export const StyledHeader = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  background: '$base1',

})

export const StyledContainer = styled('div', {
width: '1224px',
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center'
})

export const StyledNav = styled('nav', {
  display: 'flex',
  gap: '20px',

  a: {
    color: '$brandColor',
    transition: '0.2s'

  },

  'a:hover': {
    fontWeight: '700'
  }
})

export const StyledButton = styled('button', {
  a: {
    padding: '0 12px',
    fontSize: '14px',
    height: '32px',
    color: '$brandColor',
    display: 'flex',
    alignItems:'center',
    gap: '4px',
    border: 'solid 1px $brandColor',
    transition: '0.3s',

    '&:hover': {
      color: '$base1',
      background: '$brandColor'
    }
  }
})