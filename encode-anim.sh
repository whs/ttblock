#!/bin/bash

if [ "$MEDIA" = "" ]; then
	echo "export MEDIA=/path/to/file.mp4"
	exit 1
fi

SETTINGS='-map_metadata -1 -crf 5 -b:v 400k -threads 1 -vf scale=960:-1:flags=spline -ab 64k -tile-columns 6 -frame-parallel 1 -quality good -g 150'
END=00:14:06

rm ffmpeg2pass-0.log || true
ffmpeg -i "$MEDIA" $SETTINGS -an -pass 1 -speed 4 -f webm -y -t $END /dev/null
ffmpeg -i "$MEDIA" $SETTINGS -y -auto-alt-ref 1 -lag-in-frames 25 \
	-pass 2 -speed 1 -t $END static/animation.webm
rm ffmpeg2pass-0.log
