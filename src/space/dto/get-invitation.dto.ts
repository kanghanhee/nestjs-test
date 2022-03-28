export const invitationDto = (newInvitation) => {
  return {
    spaceId: newInvitation.space,
    userId: newInvitation.user.id,
    userName: newInvitation.user.lastName + newInvitation.user.firstName,
    roleId: newInvitation.roleId,
  };
};
