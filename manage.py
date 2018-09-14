#!/usr/bin/env python -W ignore::DeprecationWarning
import os
import sys

if __name__ == "__main__":
    print("Entered manage.py")
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fbwiki.settings")
    from django.core.management import execute_from_command_line
    execute_from_command_line(sys.argv)
