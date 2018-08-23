## Install

Install it with npm (`npm install unc-react-audio-list --save`). This component uses bootstrap and Font Awesome as external libraries.
Install bootstrap as component with npm (`npm install bootstrap`). Include Font Awesome CSS library in your app.
Here's a simple example:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { AudioList, ListSection, ListItem } from 'unc-react-audio-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'unc-react-audio-list/assets/css/audio-list.css';

render(
  <AudioList headerImageSrc="header.jpg">
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
```

## Documentation

Documentation and demo can be found here: http://jpbaena13.github.io/unc-react-audio-list/