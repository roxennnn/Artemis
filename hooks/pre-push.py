import sys

for line in sys.stdin:
  print(line)
  local_ref, local_sha1, remote_ref, remote_sha1 = line.strip().split()
  message = subprocess.check_output(['git', 'show', '--format=%B', '-s', local_sha1])
  print(message)
  # if not check(message):
  sys.exit(10)