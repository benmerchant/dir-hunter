# Dir Hunter

**What?** A pure Node.js script that traverses a given directory searching for files and more directories.

**Why?** If you haven't heard, [Microsoft will cease supporting Windows 7 after January 14, 2020](https://www.microsoft.com/en-us/microsoft-365/windows/end-of-windows-7-support). I am a diehard Win7 Pro guy. Even refused the free upgrade because 7 still feels like an OS, not an *operating-system-as-a-service*. I've had 10 on a couple now-cannibalized laptops, I like the start menu. Hate Cortana. I digress

Since I'll need to switch to 10 within six months, I've been either backing up or deleting/uninstalling everything on this machine; my first DIY build-a-pc from February 19, 2014. I know the exact date because that's when Steam (and a dozen mobo/cpu programs) was (were) installed.

On my quest to wipe this hard disk drive clean, I came across two folders, *Not Added to iTunes* which boasts 16 GB comprised of 2,277 files tucked away in 288 folders, and another I have since renamed *tune* claiming a mere 6.37 MB of platter space, yet contains 897 files stored amongst 2,066 folders. Both created in 2014. Neither worthy of a painstaking manual thumbing through like some 1960's secretary searching through the company filing cabinet to find that missing Gutterman file. So I thought ```Why not write a program to do it for me?```

The second reason for this project is the desire to learn more JavaScript & Node. Working on MVCs all day isn't necessarily trivial, but even when they present a particularly perilous problem, do little to less-than-alot to put a Node.js padawan through his or her paces. You will learn a lot of frameworks and libraries (read: *sugar*). However, if your business logic isn't more than CRUD with a bit of cross-CRUD, you may be becoming a better programmer in general by following industry standards, reading others' documentation, etc, but you aren't mastering JavaScript.

> Mastering JavaScript is why I'm here in the first place.  

## Current Release (WIP)
- **0.0.6** remove commented code
            tighten up annotations (I'm aware they are trifling more than decoration without a transpiler, but we're keeping this Pure-Node.js)
            refactor some variable names
            touch all 8 TODOs
            add GitHub Issues/Project/Milestone

## Previous Releases

- **0.0.5** restructuring for recursion of Looper

- **0.0.4** refactor hastily written spaghetti code into modularized library.
        recursing through sub-directories
        I have no idea how to SemVer
        added a directory with far more nested sub-dirs and less files, for local testing
