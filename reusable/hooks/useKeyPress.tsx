import { useCallback, useEffect } from "react";

export type Key =
  | "Backspace"
  | "Tab"
  | "Enter"
  | "Shift"
  | "Control"
  | "Alt"
  | "CapsLock"
  | "Escape"
  | "Esc"
  | "Space"
  | "PageUp"
  | "PageDown"
  | "End"
  | "Home"
  | "ArrowLeft"
  | "ArrowUp"
  | "ArrowRight"
  | "ArrowDown"
  | "Left"
  | "Up"
  | "Right"
  | "Down"
  | "Insert"
  | "Delete"
  | "Zero"
  | "ClosedParen"
  | "One"
  | "ExclamationMark"
  | "Two"
  | "AtSign"
  | "Three"
  | "PoundSign"
  | "Hash"
  | "Four"
  | "DollarSign"
  | "Five"
  | "PercentSign"
  | "Six"
  | "Caret"
  | "Hat"
  | "Seven"
  | "Ampersand"
  | "Eight"
  | "Star"
  | "Asterisk"
  | "Nine"
  | "OpenParen"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"
  | "Meta"
  | "Mod" // Either Ctrl for windows or Meta in Mac
  | "LeftWindowKey"
  | "RightWindowKey"
  | "Numpad0"
  | "Numpad1"
  | "Numpad2"
  | "Numpad3"
  | "Numpad4"
  | "Numpad5"
  | "Numpad6"
  | "Numpad7"
  | "Numpad8"
  | "Numpad9"
  | "Multiply"
  | "Add"
  | "Subtract"
  | "DecimalPoint"
  | "MSDecimalPoint"
  | "Divide"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  | "NumLock"
  | "ScrollLock"
  | "SemiColon"
  | "Equals"
  | "Comma"
  | "Dash"
  | "Period"
  | "UnderScore"
  | "PlusSign"
  | "ForwardSlash"
  | "/"
  | "Tilde"
  | "GraveAccent"
  | "OpenBracket"
  | "ClosedBracket"
  | "Quote";

interface UseKeyPressOptions {
  isEnabled?: boolean;
  shouldStopPropagation?: boolean;
}

const defaultOptions: UseKeyPressOptions = {
  isEnabled: true,
  shouldStopPropagation: true,
};

export const useKeyPress = (
  key: Key,
  handler: () => void,
  { isEnabled, shouldStopPropagation }: UseKeyPressOptions = defaultOptions
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== key) return;

      if (shouldStopPropagation) {
        event.stopPropagation();
      }

      handler();
    },
    [handler, key, shouldStopPropagation]
  );

  useEffect(() => {
    if (!isEnabled) return;

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, isEnabled]);
};
