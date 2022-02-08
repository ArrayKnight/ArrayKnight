import React from 'react'

const Foo = () => <>Foo</>

export default {
    title: 'Foo',
    component: Foo,
}

export const Bar = () => <Foo />
