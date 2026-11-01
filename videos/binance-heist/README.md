# The Binance Heist — HyperFrames reel

A 60-second, 1080×1920, 30 fps, caption-led motion-graphics reel. It uses HTML/CSS and GSAP with code-drawn diagrams and typography. No external image or video assets are required.

## Render locally

Requirements: Node.js 22+ and FFmpeg.

```bash
cd videos/binance-heist
npx hyperframes doctor
npx hyperframes lint
npx hyperframes render --output binance-heist.mp4 --fps 30 --quality standard
```

The GitHub Actions workflow `.github/workflows/render-binance-heist.yml` installs the runtime, checks the composition, renders the MP4, and uploads it as the `binance-heist-video` artifact.

## Script / editorial notes

The attached master prompt describes a 60-second vertical reel. It did not include a separate spoken script, so this is a caption-led explainer built around the documented October 6, 2022 BNB Chain BSC Token Hub exploit. The video distinguishes the BNB Chain bridge exploit from a direct compromise of the centralised Binance exchange.

Claims are intentionally qualified:
- The attacker withdrew 2 million BNB, valued at roughly $570 million at the time.
- Contemporary estimates commonly put the amount moved off the BNB Chain at roughly $100–110 million; estimates vary by source and timestamp.
- The incident involved the BSC Token Hub cross-chain bridge and a proof-verification flaw.
- Validators temporarily suspended BNB Smart Chain to contain the exploit.

## Sources

- Coinbase Threat Intelligence, “BSC Token Hub Compromise investigation and analysis” (Oct 31, 2022): https://www.coinbase.com/en-sg/blog/bsc-token-hub-compromise-investigation-and-analysis-8
- Nansen, “BNB Chain’s Cross-Chain Bridge Exploit Explained” (Oct 15, 2022): https://nansen.ai/post/bnb-chains-cross-chain-bridge-exploit-explained
- BNB Chain ecosystem incident update: https://www.reddit.com/r/bnbchainofficial/comments/xxu96k
- The Block, “BNB Chain resumes service after hacker siphons at least $100 million” (Oct 7, 2022): https://www.theblock.co/news/regulation/2022-10-07-biance-bnb-chain-is-back-up-after-bridge-exploit-175437
