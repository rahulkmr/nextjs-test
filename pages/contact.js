import Link from 'next/link'

export default () => (
    <div>
        <p>Welcome to contact</p>
        <div>
            Click{' '}
            <Link href='/'><a>here</a></Link>
            {' '}to get back to home.
        </div>
    </div>
)
