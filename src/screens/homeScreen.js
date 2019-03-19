import React from 'react';

import { Container, Button } from 'react-materialize';
import Hero from '../components/hero/hero';

const HomeScreen = () => (
  <main>
    <Hero />
    <div className="fixed-action-btn horizontal">
    <Button floating large className='teal darken-3' waves='light' icon='add' class="floating" />
    </div>
  </main>
);

export default HomeScreen;
