import os
from pathlib import Path

DEFAULT_ROOT_PATH = Path(os.path.expanduser(os.getenv("SWEETY_ROOT", "~/.sweety/mainnet"))).resolve()

DEFAULT_KEYS_ROOT_PATH = Path(os.path.expanduser(os.getenv("SWEETY_KEYS_ROOT", "~/.sweety_keys"))).resolve()
