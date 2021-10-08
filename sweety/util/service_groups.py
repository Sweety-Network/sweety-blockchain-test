from typing import KeysView, Generator

SERVICES_FOR_GROUP = {
    "all": "sweety_harvester sweety_timelord_launcher sweety_timelord sweety_farmer sweety_full_node sweety_wallet".split(),
    "node": "sweety_full_node".split(),
    "harvester": "sweety_harvester".split(),
    "farmer": "sweety_harvester sweety_farmer sweety_full_node sweety_wallet".split(),
    "farmer-no-wallet": "sweety_harvester sweety_farmer sweety_full_node".split(),
    "farmer-only": "sweety_farmer".split(),
    "timelord": "sweety_timelord_launcher sweety_timelord sweety_full_node".split(),
    "timelord-only": "sweety_timelord".split(),
    "timelord-launcher-only": "sweety_timelord_launcher".split(),
    "wallet": "sweety_wallet sweety_full_node".split(),
    "wallet-only": "sweety_wallet".split(),
    "introducer": "sweety_introducer".split(),
    "simulator": "sweety_full_node_simulator".split(),
}


def all_groups() -> KeysView[str]:
    return SERVICES_FOR_GROUP.keys()


def services_for_groups(groups) -> Generator[str, None, None]:
    for group in groups:
        for service in SERVICES_FOR_GROUP[group]:
            yield service


def validate_service(service: str) -> bool:
    return any(service in _ for _ in SERVICES_FOR_GROUP.values())
