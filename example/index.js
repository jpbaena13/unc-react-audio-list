/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */

import { render } from 'react-dom';

import { AudioList, ListSection, ListItem } from '../dist';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/assets/css/audio-list.css';

render(
  <AudioList headerImageSrc="header.jpg" autoPlay>
    <ListSection file="audio.mp3" title="Ley de la cultura">
      <ListItem start="0" end="4" title="Ley de la cultura" />
      <ListItem start="5" end="9" title="Cultura y patrimonio cultural" />
      <ListItem start="10" end="15" title="Generación de Políticas Culturales" />
      <ListItem start="15" end="24" title="Cuatro títulos la integran" />
    </ListSection>

    <ListSection file="audio.ogg" title="Comunidades Negras">
      <ListItem start="0" end="7" title="Ley 70 de 1993" />
      <ListItem start="8" end="18" title="Diversidad étnica" />
      <ListItem start="19" end="30" title="Integralidad y dignidad" />
    </ListSection>
  </AudioList>,
  document.getElementById('app')
);
