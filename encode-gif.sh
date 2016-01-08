#!/bin/bash

# 00:00:00 29 firstspin.webm
# 00:00:29 8 eggblock.webm
# 00:00:36 9 shieldblock.webm
# BITS=400k 00:02:50 8 swirlingwinds.webm
# 00:05:50 8 huskblock.webm

if [ "$MEDIA" = "" ]; then
	echo "export MEDIA=/path/to/file.mp4"
	exit 1
fi

if [ "$BITS" = "" ]; then
	BITS=200k
fi
SETTINGS='-map_metadata -1 -an -crf 5 -b:v $BITS -threads 1 -vf scale=640:-1:flags=spline -tile-columns 6 -frame-parallel 1 -quality good -r 24'

START=$1
END=$2
FILE=$3

rm ffmpeg2pass-0.log || true
ffmpeg -ss $START -i "$MEDIA" $SETTINGS -pass 1 -speed 4 -f webm -y -t $END /dev/null
ffmpeg -ss $START -i "$MEDIA" $SETTINGS -auto-alt-ref 1 -lag-in-frames 25 \
	-pass 2 -speed 1 -t $END "$FILE"
rm ffmpeg2pass-0.log
