import { Phone } from 'phosphor-react'
import { StyledContact } from './styles'

export function Contact() {
  return (
    <StyledContact>
      <header className='contactHeader'>
        <div className='titleContainer'>
          <span className='titleSpan'></span>
          <h2 className='titleSecundary'></h2>
        </div>
        <div className='buttonContainer'></div>
      </header>

      <div className='gridCards'>
        <div className='card'>
          <Phone size={32} />
          <div className='cardTextContainer'>
            <h3>Telefone</h3>
            <span>(071) 99600-0770</span>
          </div>
        </div>
      </div>
    </StyledContact>
  )
}
