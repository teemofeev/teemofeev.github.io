Can't tell much, but we built the whole media streaming prototype in less than 2 months.

My responsibilities in the project were:

- build a stable WebRTC two-way media & data communication between a specific IoT device and web clients
- come up with a good architecture & find tools for our goals
- select & setup the right media bridge (like jitsi-videobridge)
- stream good quality audio / video media from IoT cameras
- send & recv data / commands to the IoT device using datachannel
- build a native WebRTC client for the IoT device
- build a client for web browsers
- documentation, automation, etc.

The most interesting part was building the WebRTC client for the IoT device.

It may seem easy, but try to find at least one working solution for streaming video & audio from two cameras attached to a small IoT device, while receiving and playing incoming audio streams & data messages.

This area is completely taken by uv4l these days, which did not satisfy the requirements we had.

During my experiments I also wrote a native XMPP client for Jitsi rooms.

In this project I personally used Golang, TS (Angular), C (gstreamer), Bash, Python and other interesting things like XMPP in order to see how other solutions are functioning.

I really liked working on this one, because it was challenging and I was seeing other people suffering for years trying to solve the problem. I Hope we helped them :)

*Time invested: < 2 months.*
