// Your init script

// Atom will evaluate this file each time a new window is opened. It is run
// after packages are loaded/activated and after the previous editor state
// has been restored.

// An example hack to log to the console when each text editor is saved.

// atom.workspace.observeTextEditors (editor) ->
//   editor.onDidSave ->
//     console.log "Saved! #{editor.getPath()}"

// This is being ruled by usePackage
// https://github.com/bodil/atom-use-package
const usePackage = require("atom-use-package").usePackage;

atom.commands.add('atom-text-editor', 'user:multi-select', () => {
  let editor = atom.workspace.getActiveTextEditor();
  atom.commands.dispatch(atom.views.getView(editor), 'find-and-replace:select-next');
  atom.commands.dispatch(atom.views.getView(editor), 'find-and-replace:use-selection-as-find-pattern');
});

usePackage("disable-keybindings", {
  config: {
    allCommunityPackages: true,
    exceptCommunityPackages: []
  }
});

// use case
// usePackage('package-name', {
//   config: {},
//   keymap: {},
//   init: {},
//   enableKeys: false
// }

usePackage('expand-region', {
  keymap: {
    '.platform-darwin atom-text-editor': {
      'shift-cmd-space': 'expand-region:expand',
      'shift-alt-space': 'expand-region:shrink'
    }
  },
  enableKeys: false
});
usePackage('git-blame', {enableKeys: false});
usePackage('git-log', {enableKeys: false});
// usePackage('git-plus', {enableKeys: false});
usePackage('hey-pane', {enableKeys: true});
usePackage('highlight-selected', {enableKeys: false});
usePackage('indentation-jumper', {enableKeys: true});
usePackage('ink', {enableKeys: false});
usePackage('lisp-paredit', {enableKeys: false});
usePackage('markdown-fold', {
  keymap: {
    '.platform-darwin atom-text-editor[data-grammar="source gfm"]': {
      'alt-cmd-{': 'markdown-fold:fold-all'
    }
  },
  enableKeys: false
});
usePackage('parinfer', {enableKeys: true});
usePackage('project-manager', {enableKeys: true});
usePackage('proto-repl', {enableKeys: true});
usePackage('proto-repl-charts', {enableKeys: false});
usePackage('set-syntax', {enableKeys: false});
usePackage('Sublime-Style-Column-Selection', {enableKeys: false});
usePackage('tidy-markdown', {enableKeys: false});
// usePackage('sublime-word-navigation', {enableKeys: false});
usePackage('word-jumper', {enableKeys: true});
