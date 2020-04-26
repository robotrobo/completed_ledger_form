import xml.etree.ElementTree as ET
import argparse


parser = argparse.ArgumentParser(description='Get ledger name for the specified number')
parser.add_argument('--number', action='store', type=str, required = True, help='number of the ledger')
args = parser.parse_args()


root = ET.parse("balance.xml").getroot()

for ledger in root.findall("LEDGER"):
    number = ""
    try:
        number = ledger.find("LEDGERMOBILE").text
        # print(type(number), type(args.number))
        if number == args.number:
            print(ledger.attrib["NAME"].replace("&", "&amp;"))
    except AttributeError:
        pass

    