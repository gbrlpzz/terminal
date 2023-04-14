import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

/* email to be configured. Code below: 

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:hi@nm4tt72.com');

  return 'Opening mailto:hi@m4tt72.com...';
};

*/

export const banner = (args?: string[]): string => { 
  return `Type 'help' to see list of available commands.`;
};

export const chat = async (args: string[]): Promise<string> => {
  window.open(`https://opearincerta.com/`);

  return 'Opening chat...';
};
