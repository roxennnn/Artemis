import sys
import os
import subprocess

########################################
#               Constants              #
########################################

RESTRICTED_BRANCH = 'master'
MASTER_EMAIL = 'robertorossini96@gmail.com'
MASTER_USER = 'Roberto Rossini'
PUSH_FILE = 'hooks/push.txt'

########################################
#             Check branch             #
########################################

def check_branch(push_branch=''):
  if RESTRICTED_BRANCH == current_branch:
    ########################################
    #          Check master email          #
    ########################################

    user_email = subprocess.check_output(['git', 'config', '--get', 'user.email']).decode('ascii').strip()
    user_name = subprocess.check_output(['git', 'config', '--get', 'user.name']).decode('ascii').strip()
    if user_email == MASTER_EMAIL and user_name == MASTER_USER:
      ########################################
      #  Prompt user to ask for confirmation #
      ########################################

      sys.stdin = open('/dev/tty', 'r')
      first_check = input(
        '\n🚨 You are about to push to \033[31m\033[1mmaster\033[0m, is that what you intended? 🚨 Type \033[1;32mY\033[0m to continue, \033[0;35melse\033[0m to abort: '
      )
      if first_check.lower() == 'y':
        second_check = input(
          '\n🚨 Roberto, are you sure you want to push to the \033[31m\033[1mmaster\033[0m branch? 🚨 Type \033[1;32mY\033[0m to continue, \033[0;35melse\033[0m to abort: '
        )
        if second_check.lower() == 'y':
          if push_branch != '':
            print(f'\n✅ \033[32m\'\033[1m{push_branch}\033[0m\033[32m\' confirmed!\033[0m')
          else:
            print(f'\n✅ \033[32mpush confirmed!\033[0m')
          sys.exit(0) # push is allowed --> double yes and correct email
        else:
          print('\n❌ push aborted!')
          sys.exit(1) # abort push --> second check answer is no
      else:
        print('\n❌ push aborted!')
        sys.exit(1) # abort push --> first check answer is no
    else:
      print(f'\n🚫 \033[31mYou cannot push to the \033[1m{RESTRICTED_BRANCH}\033[0m\033[31m!\033[0m\n')
      sys.exit(1) # abort push --> this user cannot push to the master branch

  ########################################
  #          Everything is fine          #
  ########################################

  print('\n✅ \033[32mpush allowed!\033[0m')
  sys.exit(0) # push is allowed --> the branch is not the restricted one


########################################
#               Branches               #
########################################

current_branch = subprocess.check_output(['git', 'rev-parse', '--abbrev-ref', 'HEAD']).decode('ascii').strip()

try:
  # Read push file
  push_file = open(PUSH_FILE, 'r')
  push_branch = push_file.readlines()[0].strip().lower()
  push_file.close()

  # Clean
  os.remove(PUSH_FILE)
except:
  print('Fail reading push textfile')
  check_branch()

if current_branch not in push_branch:
  print(
    f'🚫 \n\033[33mYou must use \'\033[0m\033[35mgit push origin \033[1m{current_branch}\033[0m\033[33m\'\033[0m'
  )
  sys.exit(1)

check_branch(push_branch)