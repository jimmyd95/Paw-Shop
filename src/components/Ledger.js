// import background from '../images/littleNightmare.jpg'

export default function Ledger() {
  return (
    <section className='ledger'>
        <img src='/images/littleNightmare.jpg' alt='ledger-background' className='ledger--background'/>
        <h1 className='ledger--header'>Little Cat Shop!</h1>
        <p className='ledger--text'>
            A small selection of cats I found online (I actually prefer dogs)
        </p>
    </section>
  )
}
