/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/voting_dapp.json`.
 */
export type VotingDapp = {
    "address": "6wAc8r7HCckiSnoLtr1eUWGTf47LbwoSwKw6WJyaSWTH",
    "metadata": {
      "name": "votingDapp",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "increment",
        "discriminator": [
          11,
          18,
          104,
          9,
          104,
          174,
          59,
          33
        ],
        "accounts": [
          {
            "name": "counter",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    118,
                    111,
                    116,
                    105,
                    110,
                    103,
                    95,
                    100,
                    97,
                    112,
                    112
                  ]
                }
              ]
            }
          }
        ],
        "args": []
      },
      {
        "name": "initialize",
        "discriminator": [
          175,
          175,
          109,
          31,
          13,
          152,
          155,
          237
        ],
        "accounts": [
          {
            "name": "user",
            "writable": true,
            "signer": true
          },
          {
            "name": "counter",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    118,
                    111,
                    116,
                    105,
                    110,
                    103,
                    95,
                    100,
                    97,
                    112,
                    112
                  ]
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      }
    ],
    "accounts": [
      {
        "name": "counter",
        "discriminator": [
          255,
          176,
          4,
          245,
          188,
          253,
          124,
          25
        ]
      }
    ],
    "types": [
      {
        "name": "counter",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "count",
              "type": "u64"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ]
  };
  