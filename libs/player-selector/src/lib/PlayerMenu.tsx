import React from 'react';

import { Menu } from 'antd';

interface Player {
  name: string;
  class: string; // TODO: Convert into an enum
}

interface PlayerMenuProps {
  players: Array<Player>;
}

export const PlayerMenu = (props: PlayerMenuProps) => {
  return (
    <Menu>
      {props.players.map((player) => {
        return (
          <Menu.Item key={player.name + player.class}>
            <a target="_blank" rel="noopener noreferrer" href="#">
              {player.name}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default PlayerMenu;
